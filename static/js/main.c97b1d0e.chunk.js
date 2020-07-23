(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),s=a(18),i=a.n(s),r=a(20),c=a(4),l=a(5),h=a(7),u=a(6),d=a(8),b=(a(26),a(15)),k="https://reactnd-books-api.udacity.com",m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:m},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={shelf:null,hover:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target.value,a=this.props.id,o={id:this.props.id,title:this.props.title,author:this.props.author,backgroundImage:this.props.backgroundImage,shelf:t};this.setState({shelf:t}),function(e,t){return fetch("".concat(k,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})}(o,t).then(function(e){console.log(e)}),this.props.editBook(a,o)}},{key:"activeHover",value:function(){this.setState({hover:!0})}},{key:"inactiveHover",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"book-shelf-changer ".concat(this.state.hover?"book-shelf-changer-hover":""),onMouseEnter:this.activeHover.bind(this),onMouseLeave:this.inactiveHover.bind(this)},n.a.createElement("select",{value:this.state.shelf||this.props.shelf,onChange:this.handleChange.bind(this)},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))}}]),t}(o.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={hover:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"activeHover",value:function(){this.setState({hover:!0})}},{key:"inactiveHover",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e=n.a.createElement(v,{title:this.props.title,author:this.props.author,backgroundImage:this.props.backgroundImage,id:this.props.id,shelf:this.props.shelf,editBook:this.props.editBook});return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top",onMouseEnter:this.activeHover.bind(this),onMouseLeave:this.inactiveHover.bind(this)},this.state.hover?n.a.createElement("div",{className:"book-cover-faded"}):null,n.a.createElement("div",{className:"book-cover",style:{width:150,height:200,backgroundSize:"contain",backgroundImage:"url(".concat(this.props.backgroundImage,")")}}),this.state.hover?e:null),n.a.createElement("div",{className:"book-title"},this.props.title),n.a.createElement("div",{className:"book-authors"},this.props.author))}}]),t}(o.Component),g=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},this.props.shelf),n.a.createElement("div",{className:"bookshelf-books"},this.props.books.map(function(t){return n.a.createElement(p,{title:t.title,author:t.author,backgroundImage:t.backgroundImage,key:t.id,id:t.id,shelf:t.shelf,editBook:e.props.editBook})})))}}]),t}(o.Component);function E(e){return n.a.createElement("div",null,n.a.createElement(g,{shelf:"Currently Reading",books:e.books.filter(function(e){return"currentlyReading"===e.shelf}),editBook:e.editBook}),n.a.createElement(g,{shelf:"Want to Read",books:e.books.filter(function(e){return"wantToRead"===e.shelf}),editBook:e.editBook}),n.a.createElement(g,{shelf:"Read",books:e.books.filter(function(e){return"read"===e.shelf}),editBook:e.editBook}))}var j=a(9),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target.value;a.setState({searchText:t}),""!==t?a.updateList(t):a.clearList()},a.state={searchText:"",books:[],found:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateList",value:function(e){var t,a=this;(t=e,fetch("".concat(k,"/search"),{method:"POST",headers:Object(b.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:t})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){if(console.log(e),e.error)a.setState({found:!1});else{var t=a.getAssignedBooks();a.setState({books:e.map(function(e){return{id:e.id,title:e.title,author:"authors"in e?e.authors:null,backgroundImage:"imageLinks"in e?e.imageLinks.thumbnail:null,shelf:e.id in t?t[e.id]:"none"}}),found:!0})}})}},{key:"clearList",value:function(){this.setState({books:[]})}},{key:"getAssignedBooks",value:function(){var e={};return this.props.books.forEach(function(t){e[t.id]=t.shelf}),e}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(j.b,{to:"/"},n.a.createElement("button",{className:"close-search"},"Close")),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.searchText,onChange:this.handleChange}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},this.state.found?this.state.books.map(function(t){return n.a.createElement(p,{title:t.title,author:t.author,backgroundImage:t.backgroundImage,key:t.id,id:t.id,shelf:t.shelf,editBook:e.props.editBook})}):n.a.createElement("div",null,"No Results Found"))))}}]),t}(o.Component),O=a(0),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={books:[],id:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(k,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){console.log(t);var a=(t=t.map(function(e){return{id:e.id,title:e.title,author:e.authors,backgroundImage:e.imageLinks.thumbnail,shelf:e.shelf}})).map(function(e){return e.id});e.setState({books:t,id:new Set(a)})})}},{key:"editBook",value:function(e,t){var a=Object(r.a)(this.state.books);this.state.id.has(e)?a.forEach(function(a){a.id===e&&(a.shelf=t.shelf)}):(a.push(t),this.state.id.add(t.id)),this.setState({books:a})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(O.a,{path:"/search"},n.a.createElement(y,{editBook:this.editBook.bind(this),books:this.state.books})),n.a.createElement(O.a,{exact:!0,path:"/"},n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"My Reads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement(E,{books:this.state.books,editBook:this.editBook.bind(this)})),n.a.createElement(j.b,{to:"/search"},n.a.createElement("div",{className:"open-search"},n.a.createElement("button",null,"Add a book"))))))}}]),t}(n.a.Component);a(33);i.a.render(n.a.createElement(j.a,null,n.a.createElement(N,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.c97b1d0e.chunk.js.map