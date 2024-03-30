// #include <iostream>
// using namespace std;

// int main() {

//     // /int arr1[] = {1, 2, 3, 4, 5, 6};
//     // int arr2[] = {7, 8, 9, 0, 10};
//     // int size1 = sizeof(arr1) / sizeof(arr1[0]);
//     // int size2 = sizeof(arr2) / sizeof(arr2[0]);
//     // int size = size1 + size2;
//     // int combined[size];
//     // for (int i = 0; i < size1; i++) {
//     //     combined[i] = arr1[i];
//     // }
//     // for (int i = 0; i < size2; i++) {
//     //     combined[size1 + i] = arr2[i];
//     // }
//     // for (int i = 0; i < size; i++) {
//     //     cout << combined[i] << " ";
//     // }
#include <iostream>
using namespace std;

int main()
{
    int size1 = INT8_MAX;
    int arr1[size1] = {1, 2, 3, 4, 5, 6};
    int arr2[] = {7, 8, 9, 0, 10};

    int size2 = sizeof(arr2) / sizeof(arr2[0]);
    int size22 = 6;
    for (int i = 0; i < size2; i++)
    {
        arr1[size2++] = arr2[i];
    }
    for (auto x : arr1)
    {
        cout << x << " ";
    }
    return 0;
}
