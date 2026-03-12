---
title: Book Log
nav: Log
nav_order: 1
---

<script src=".\assets\js\book-log.js"></script>
Testing integrating JS into MD
<body onload="parseCSVFile()"> <!-- -->
    <!-- Page content here -->
</body>

<div class="accordion" id="bookList">
    <div class="accordion-item">
	    <h2 class="accordion-header" id="${headingId}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
            </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${parentId}">
            <div class="accordion-body">
                <strong>Title: </strong>TITLE <strong>Author: </strong> AUTHOR
				<strong>Genre: </strong>GENRE <strong>Reading Status: </strong>READ
                <strong>Rating: </strong> RATING
                <strong>Series: </strong>SERIESNAME <strong>Series Number: </strong> SERIESNUMBER
            </div>
        </div>
    </div>
</div>