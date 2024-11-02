/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const {bookId, image, bookName, author, tags, category } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-blue-200 py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[160px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="fles justify-center gap-4 bg">
                        {
                            tags.map((tag, index) => <button key={index} className="text-green-600 btn btn-xs bg-green-200">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border border-dashed my-2"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>

                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;