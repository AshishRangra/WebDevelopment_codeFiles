#include <iostream>
using namespace std;
void reverse(int *arr, int start, int end)
{
    while (start < end)
    {
        swap(arr[start++], arr[end--]);
    }
}
int rotated(int *arr, int k)
{
    int len = 6;
    // int temp[len];
    // int j = 0;
    // for (int i = 0; i < k; i++)
    // {
    //     temp[j++] = arr[len - k + i];
    // }
    // for (int i = 0; i < len - k; i++)
    // {
    //     temp[j++] = arr[i];
    // }
    // for (int i = 0; i < len; i++)
    // {
    //     arr[i] = temp[i];
    // }
    reverse(arr, 0, len - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, len - 1);
}
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    rotated(arr, 2);
    for (int i = 0; i < 6; i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}