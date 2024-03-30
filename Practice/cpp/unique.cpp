#include <iostream>
using namespace std;
int main()
{
    int a[] = {2, 4, 7, 2, 7};
    int ans = 0;
    for (int i = 0; i < 5; i++)
    {
        ans = ans ^ a[i];
    }
    cout << ans;
    return 0;
}