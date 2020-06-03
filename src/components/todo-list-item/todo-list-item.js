import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // constructor(){

  //   super();
  //   this.onLabelClick = () => {
  //       console.log(`Done: ${this.props.label}`)
  //   };

  // this.state = {
  //   done: false
  // };
  // }



  render() {
    
    const { label,
       onDeleted, 
       onToggleImportant, 
       onToggleDone,
       important, 
       done } = this.props;

    let classNames = "todo-list-item";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={
            onToggleDone
            // this.onLabelClick //.bind(this)//
          }
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash" />
        </button>
      </span>
    );
  }
}

///////FUNCTION

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? "steelblue" : "black",
//     fontWeight: important ? 'bold' : 'normal' ,
//   };
//   return (
//     <span className="todo-list-item">
//         <span
//             className="todo-list-item-label"
//             style={style}>
//             {label}
//         </span>

//         <button type="button"
//         className='btn btn-outline-success btn-sm float-right'>
//             <i className='fa fa-exclamation'/>
//         </button>

//         <button type="button"
//         className='btn btn-outline-danger btn-sm float-right'>
//             <i className='fa fa-trash'/>
//         </button>

//     </span>
//   );
// };
