#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int no = 5;
    int res = 0;
    int count = 1;
    while (no > 0)
    {
        int remainder = no % 2;
        // cout << remainder << endl;

        // cout << no << endl;
        res = res + remainder * count;
        count = count * 10;
        // cout << "res" << res << endl;
        no = no / 2;
    }
    cout << res << endl;

    // binary to decimal
    int p = 0;
    int num = 1111;
    int res2 = 0;
    while (num > 0)
    {
        int rmd = num % 10;
        res2 = res2 + rmd * pow(2, p);

        num /= 10;
        p++;
    }
    cout << res2 << endl;
    return 0;
}