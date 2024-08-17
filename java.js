$(document).ready(function() {
    let commentId = 0; 
    function createComment(displayName, commentText) {
        commentId++;
        return `
            <div class="comment" id="comment-${commentId}">
                <img src="userIcon.jpg" alt="User Image" class="comment-image">
                <div class="comment-content">
                    <div class="comment-header">
                        <strong>${displayName}</strong>
                    </div>
                    <div class="comment-body">
                        ${commentText}
                    </div>
                    <div class="comment-actions">
                        <a href="#" class="edit" data-id="${commentId}">Edit</a>
                        <a href="#" class="delete" data-id="${commentId}">Delete</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Add a new comment
    $('#submit-comment').click(function() {
        const displayName = $('#display-name').val();
        const commentText = $('#comment-text').val();

        if (displayName && commentText) {
            $('#comments-section').prepend(createComment(displayName, commentText));
            $('#display-name').val('');
            $('#comment-text').val('');
        } else {
            alert("Please enter both a display name and a comment.");
        }
    });

    // Delete a comment
    $('#comments-section').on('click', '.delete', function(e) {
        e.preventDefault();
        const id = $(this).data('id');
        $(`#comment-${id}`).remove();
    });

    // Edit a comment
    $('#comments-section').on('click', '.edit', function(e) {
        e.preventDefault();
        const id = $(this).data('id');
        const currentComment = $(`#comment-${id} .comment-body`).text();

        const newComment = prompt('Edit your comment:', currentComment);
        if (newComment !== null && newComment.trim() !== "") {
            $(`#comment-${id} .comment-body`).text(newComment);
        }
    });
});