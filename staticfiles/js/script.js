document.addEventListener("DOMContentLoaded", function() {
    const deleteButtons = document.querySelectorAll(".btn-delete");
    
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const isConfirmed = confirm("Are you sure you want to delete this task?");
            if (!isConfirmed) {
                event.preventDefault();  
            }
        });
    });
});
