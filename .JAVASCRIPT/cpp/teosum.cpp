#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    // int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int arr[] = {0, -1, 2, -3, 1};
    sort(arr, arr + 5);
    int target = 12;
    int left = 0, right = 4;
    int sum;
    while (left < right)
    {
        sum = arr[left] + arr[right];
        if (sum == target)
        {
            cout << left << " " << right << endl;
            return 0;
        }
        else if (sum > target)
            right++;
        else
            left++;
    }
    cout << "two sum of given target not exist";
    return 0;
}

