---
title: Book Log
nav: Log
nav_order: 1
---
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="book-log.js"></script>
📚 **Book Logging Website**
Browse through your selection of books.
<body onload="parseCSVFile()"> 
   <div id="booksContainer">
      <button class="btn btn-primary" onclick="parseCSVFile()">Load Books</button>
   </div>
</body>