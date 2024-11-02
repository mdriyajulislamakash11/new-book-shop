import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utllites/Utitlities";


const BookDetails = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image, bookName, author, description } = book;

    const handeAddMarkRead =(id) => {
        addToStoredReadList(id)
    }

    return (
        <div className="">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={() => handeAddMarkRead(id)} 
            className="btn btn-outline mr-4 btn-accent">Mark as Read</button>

            <button className="btn btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetails;