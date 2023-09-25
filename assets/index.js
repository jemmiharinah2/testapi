function displayUsers() {
  fetch('./assets/user.json')
    .then(response => response.json())
    .then(data => {
      const userListDiv = document.getElementById('userList');
      let html = '';
      data.forEach(user => {
        html += `
        
          <div class="info">
              <div class="image">
              <img src="./assets/img-bloc5.png" alt="">
              
              </div>
              <div class="Text">
                <h3><strong></strong> ${user.username}</h>
                <h2><strong></strong> ${user.name}</h2>
                <p><strong></strong> ${user.any}</p>
                
            <div class="additionalInfo" style="display: none;">
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Téléphone:</strong> ${user.phone}</p>
                <p><strong>Adresse:</strong> ${user.address}</p>
                <p><strong>company:</strong> ${user.company}</p>
                
            </div>
            <button class="voirPlusBtn">Voir plus</button>
            </div>
          </div>
          
        `;
      });
      userListDiv.innerHTML = html;

      const voirPlusBtns = document.querySelectorAll('.voirPlusBtn');
      voirPlusBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const additionalInfoDiv = btn.previousElementSibling;
         
          additionalInfoDiv.style.display = additionalInfoDiv.style.display === 'none' ? 'block' : 'none';
        });
      });
    })
    .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
}

displayUsers();
