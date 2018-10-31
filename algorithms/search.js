/**
 * Implement these two search algorithms.
 */

/**
 * Search for the number in the sorted list with the linear search algorithm
 * and return how many comparisons was needed to find it.
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number} Number of comparisons
 */
function linear_search(number, list) {


    return 0;
}


/**
 * Search for the number in the sorted list with the binary search algorithm
 * and return how many comparisons was needed to find it.
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number} Number of comparisons
 */
function binary_search(number, list) {


    return 0;
}

function print_result(search, comparisons_count) {
    let result = search + ' search ';

    if (comparisons_count > 0) {
        result += `found it in ${comparisons_count} steps.`
    } else {
        result += 'did not find it.'
    }

    console.log(result);
}


function main() {
    let numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97];
    let searched_number = Number(prompt('What is the number you are looking for? (0-100)'));

    print_result('Linear', linear_search(searched_number, numbers));
    print_result('Binary', binary_search(searched_number, numbers));
}

main();

