#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int x = 1025;
    for (int n = 0; n <= 30; n++)
    {
        if (pow(2, n) == x)
        {

            cout << "true";
            return 0;
        }
     
    }
    cout<<"false";
    return 0;
}