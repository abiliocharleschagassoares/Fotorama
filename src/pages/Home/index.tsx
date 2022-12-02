import { useState, useEffect, useContext } from "react";

import { Photo } from "../../models/Photo";
import { PhotoService } from "../../service/PhotoService";
import {
  Container,
  CurrentPage,
  FilterInput,
  Loading,
  NavigationArea,
  NavigationButton,
  ResultsArea,
  SearchArea,
  SearchButton,
  SelectOption,
  SelectSorting,
  SelectSortingArea,
} from "./styles";
import loadingGif from "../../assets/img/loading.gif";
import PhotoCard from "../../components/PhotoCard";
import { UserContext } from "../../context/UserContext";
import { SearchOrderBy } from "unsplash-js";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, isLoading] = useState(false);

  const { filter, setFilter, orderBy, setOrderBy } = useContext(UserContext);

  const photoService = new PhotoService();

  const searchPhotos = async () => {
    isLoading(true);
    setPhotos([]);
    const photosFound = await photoService.findPhotos(
      filter,
      page,
      perPage,
      orderBy
    );
    setPhotos(photosFound.photos);
    setTotalPages(photosFound.totalPages);
    isLoading(false);
  };

  useEffect(() => {
    searchPhotos();
  }, [page, orderBy]);

  return (
    <Container>
      <SearchArea>
        <FilterInput
          placeholder="Digite o termo da busca"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          onClick={() => {
            setPage(1);
            searchPhotos();
          }}
        >
          Buscar
        </SearchButton>
        <SelectSortingArea>
          <SelectSorting
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value as SearchOrderBy)}
          >
            <SelectOption value="relevant">relevant</SelectOption>
            <SelectOption value="latest">latest</SelectOption>
          </SelectSorting>
        </SelectSortingArea>
      </SearchArea>

      <ResultsArea>
        {loading && <Loading src={loadingGif} alt="Carregando resultados" />}

        {photos.length > 0 &&
          photos.map((p) => <PhotoCard key={p.id} photo={p} />)}
      </ResultsArea>

      {totalPages > 1 && (
        <NavigationArea>
          {page > 1 && (
            <NavigationButton onClick={() => setPage(page - 1)}>
              Página anterior
            </NavigationButton>
          )}

          <CurrentPage>
            Página {page} de {totalPages}
          </CurrentPage>

          {page < totalPages && (
            <NavigationButton onClick={() => setPage(page + 1)}>
              Próxima página
            </NavigationButton>
          )}
        </NavigationArea>
      )}
    </Container>
  );
};

export default Home;
