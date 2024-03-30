#include <iostream>
using namespace std;
int main()
{
    int arr[] = {-1, 2, 3, 4, 5, 6, 7};
    int result = -99999;
    // int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int sum = 0;
    int size = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
        if (result < sum)
        {
            result = sum;
        }
        if (sum < 0)
        {
            sum = 0;
        }
    }
    cout << result << endl;
    return 0;
}