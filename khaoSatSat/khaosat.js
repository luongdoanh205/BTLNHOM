document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    var feedback = document.getElementById('feedback').value;
    
    if (feedback.trim() !== '') {
         
        document.getElementById('feedbackResult')
        document.getElementById('feedbackForm').reset();   

         
        var feedbackList = document.getElementById('feedbackList');
        var feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.textContent = feedback;
        feedbackList.appendChild(feedbackItem);  
    } else {
        document.getElementById('feedbackResult').textContent = 'Vui lòng nhập góp ý.';
    }
});