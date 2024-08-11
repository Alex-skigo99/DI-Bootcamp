import GenreChoice from "./GenreChoice";
import { useSelectBooks } from "./hooks";

const BookList = () => {
    const renderBooks = useSelectBooks();
    console.log(renderBooks);

    return (<>
        <GenreChoice />
        {
            renderBooks.map(book => {
                return (
                    <div>
                        <h3>
                            {book.id}{' - '}{book.title}
                        </h3>
                        <h4>{book.genre}</h4>
                        <p>{book.author}</p>
                    </div>
                )
            })
        }
    </>)
};

export default BookList;