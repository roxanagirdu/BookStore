import React , {PropTypes} from 'react';

const AdminPage = ({booksList, addNewBook}) => {
 	return (
 		 <div>
        <h3>Add a new book</h3>
        <form onSubmit={e => {
                  e.preventDefault();
                  addNewBook(e);
        }}>
          <div className="form-group" >
            <input type="text" name="title" placeholder="Book Name" required="required" />
          </div>
          <div className="form-group">
            <input type="text" name="author" placeholder="Author" required="required" />
          </div>
          <div className="form-group">
            <input type="text" name="price" placeholder="Price" required="required"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success" >Submit </button>
          </div>
        </form>
      </div> )
};

AdminPage.PropTypes = {
	booksList: PropTypes.array,
	addNewBook: PropTypes.func

};
export default AdminPage