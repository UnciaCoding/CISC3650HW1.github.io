---
title: Book Log
nav: Log
nav_order: 1
---
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src=".\assets\js\book-log.js"></script>
Testing integrating JS into MD
<body onload="parseCSVFile()"> <!-- -->
    <!-- Page content here -->
</body>

<div class="accordion" id="bookList">
    <div class="accordion-item">
	    <h2 class="accordion-header" id="${headingId}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}"> 
                TITLE
            </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${parentId}">
            <div class="accordion-body">
                <pre>
                    <strong>Title: </strong>TITLE <strong>Author: </strong> AUTHOR <br>
                    <strong>Genre: </strong>GENRE      <strong>Reading Status: </strong>READ <br>
                    <strong>Rating: </strong> RATING<br>
                    <strong>Series: </strong>SERIESNAME      <strong>Series Number: </strong> SERIESNUMBER<br>
                </pre>
            </div>
        </div>
    </div>
</div>