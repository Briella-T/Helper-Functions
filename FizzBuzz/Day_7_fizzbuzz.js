function runFizzBuzz() {
    const limitInput = document.getElementById('limit');
    const limit = parseInt(limitInput.value) || 100;

    const resultList = document.getElementById('fizzbuzzList');
    resultList.innerHTML = '';

    for (let i = 1; i <= limit; i++) {
        let output = '';

        if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz';
        } 
        else if (i % 3 === 0) {
            output = 'Fizz';
        } 
        else if (i % 5 === 0) {
            output = 'Buzz';
        } 
        else {
            output = i.toString();
        }

        const listItem = document.createElement('li');
        listItem.textContent = output;

        if (output !== i.toString()) {
            listItem.className = 'fizzbuzz-result';
        }

        resultList.appendChild(listItem);
    }
}

document.getElementById('runButton').addEventListener('click', runFizzBuzz);


