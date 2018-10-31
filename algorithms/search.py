"""
Implement these two search algorithms.
"""


def linear_search(number, list):
    """
    Search for the number in the sorted list with the linear search algorithm
    and return how many comparisons was needed to find it.

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Number of comparisons
    :rtype: integer
    """

    return 0


def binary_search(number, list):
    """
    Search for the number in the sorted list with the binary search algorithm
    and return how many comparisons was needed to find it.

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Number of comparisons
    :rtype: integer
    """

    return 0


def print_results(search, comparisons_count):
    result = search.title() + ' search '

    if comparisons_count > 0:
        result += 'found it in {count} steps.'.format(count=comparisons_count)
    else:
        result += 'did not find it.'

    print(result)


def main():
    numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97]
    searched_number = int(input('What is the number you are looking for? (0-100) '))
    print_results('linear', linear_search(searched_number, numbers))
    print_results('binary', binary_search(searched_number, numbers))


if __name__ == '__main__':
    main()
