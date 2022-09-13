function fun() {
    /*var i = limit;*/
    /*var j = limit2;*/
    var limit = document.getElementById('limit').value;
    var limit2 = document.getElementById('limit2').value;
    var result = document.getElementById("result");
    result.innerHTML = "Result: ";
    for (var i = limit; i <= limit2; i++) {
        var prime = true;
        /* set j = 2 and NOT j = 1 */
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            result.insertAdjacentHTML('beforeend', i + ','); /* replaced <br/> with , to avoid page scroll */
        }
    }
}
fun(); /* test pupose only */
