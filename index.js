  function appendValue(val) {
            document.getElementById('display').value += val;
        }

        function calculate() {
            const input = document.getElementById('display').value;
            const result = eval(input); 
            document.getElementById('display').value = result;
        }