const selectedOption = document.querySelector('.selected-option');
            const optionsList = document.querySelector('.options');
            
            selectedOption.addEventListener('click', function () {
                optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
            });
            
            const options = document.querySelectorAll('.options li');
            options.forEach(option => {
                option.addEventListener('click', function () {
                    selectedOption.innerHTML = option.innerHTML;
                    optionsList.style.display = 'none';
                });
            });