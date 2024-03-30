#include <iostream>
using namespace std;
int main()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = i; j < 5; j++)
        {
            cout << "x";
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << "x";
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }
        for (int k = 0; k < 2 * (5 - i) - 1; k++)
        {
            cout << "x";
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++)
    {
        for (int j = i; j < 5; j++)
        {
            cout << " ";
        }
        for (int k = 0; k < 2 * i + 1; k++)
        {
            cout << "x";
        }
        cout << endl;
    }

    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << j + 1;
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << 4 - j;
        }
        cout << endl;
    }
    int k = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << k++ << " ";
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << i;
        }
        cout << endl;
    }
    k = 0;
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << k++;
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++)
    {
        // k = i;
        // for (int j = 0; j < i; j++)
        // {
        //     cout << k++;
        // }
        // cout << endl;
        for (int j = 0; j < i; j++)
        {
            cout << i + j - 1;
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << i - j + 1;
        }
        cout << endl;
    }
    for (char i = 'A'; i <= 'C'; i++)
    {
        for (char j = 'A'; j <= 'C'; j++)
        {
            cout << i;
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            char print = 'A' + i - 1;
            cout << print;
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            char ch = 'A' + j - 1;
            cout << ch;
        }
        cout << endl;
    }
    char ch = 'A';
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5; j++)
        {

            cout << ch++;
        }
        cout << endl;
    }
    ch = 'A';
    for (int i = 1; i <= 5; i++)
    {
        ch = 'A' + i - 1;
        for (int j = 1; j <= 5; j++)
        {
            cout << ch++;
        }
        cout << endl;
    }
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            char ch = 'A' + i - 1;
            cout << ch;
        }
        cout << endl;
    }
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            char ch = 'A' + i + j - 2;
            cout << ch;
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 1; i <= 3; i++)
    {

        char ch = 'A' + 3 - i;
        for (int j = 1; j <= i; j++)
        {
            cout << ch++;
        }
        cout << endl;
    }
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 4 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << "*";
        }
        cout << endl;
    }
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 4 - i + 1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 5 - i; k++)
        {
            cout << "*";
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 5 - i; k++)
        {
            cout << i;
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << i;
        }
        cout << endl;
    }
    int count = 0;
    for (int i = 1; i <= 5; i++)
    {
        count = i;
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 5 - i; k++)
        {
            cout << count++;
        }
        cout << endl;
    }
    count = 1;
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << count++;
        }
        cout << endl;
    }

    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 4 - i; j++)
        {
            cout << " ";
        }
        // for (int k = 1; k <= i; k++)
        // {
        //     cout << k;
        //     if (k == i)
        //     {
        //         for (int l = k - 1; l >= 1; l--)
        //         {
        //             cout << l;
        //         }
        //     }
        // }
        for (int k = 1; k <= i; k++)
        {
            cout << k;
        }
        for (int l = i - 1; l >= 1; l--)
        {
            cout << l;
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i + 1; j++)
        {
            cout << j;
        }
        for (int k = 1; k <= i - 1; k++)
        {
            cout << "x";
        }
        for (int l = 1; l <= i - 1; l++)
        {
            cout << "x";
        }
        for (int m = 5 - i + 1; m >= 1; m--)
        {
            cout << m;
        }
        cout << endl;
    }

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << "x ";
        }
        cout << endl;
    }
    cout << endl;

    for (int i = 1; i <= 6; i++)
    {
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k < 6 - i + 1; k++)
        {
            cout << "x ";
        }
        cout << endl;
    }

    for (int i = 1; i <= 4; i++)
    {
        if (i == 1 || i == 4)
        {
            for (int j = 1; j <= 4; j++)
            {
                cout << "x";
            }
        }
        else
        {
            for (int j = 1; j <= 4; j++)
            {
                if (j == 1 || j == 4)
                {
                    cout << "x";
                }
                else
                {
                    cout << " ";
                }
            }
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 1; i <= 6; i++)
    {

        for (int j = 1; j <= 4; j++)
        {
            if (i == 1 || i == 4 || j == 1 || j == 4)
            {
                cout << "x";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
    int bol = 0;
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            if (bol == 0)
            {
                cout << ++bol;
            }
            else
            {
                cout << --bol;
            }
        }
        cout << endl;
    }

    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 4 - i; j++)
        {
            cout << " ";
        }
        for (int k = i; k >= 1; k--)
        {
            cout << k;
        }
        for (int l = 2; l <= i; l++)
        {
            cout << l;
        }
        cout << endl;
    }
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 4; k++)
        {
            cout << "x";
        }
        cout << endl;
    }
    for (int i = 1; i <= 9; i++)
    {
        if (i <= 5)
        {
            for (int j = 1; j <= 5 - i; j++)
            {
                cout << " ";
            }
            for (int k = 1; k <= i; k++)
            {
                cout << "* ";
            }
        }
        else
        {
            for (int j = 1; j <= i - 5; j++)
            {
                cout << " ";
            }
            for (int k = 1; k <= 10 - i; k++)
            {
                cout << "* ";
            }
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 1; i <= 10; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        for (int k = 1; k <= 10 - i; k++)
        {
            cout << " ";
        }
        for (int l = 1; l <= i; l++)
        {
            cout << " *";
        }
        cout << endl;
    }

    for (int i = 1; i <= 9; i++)
    {
        for (int j = 1; j <= 9 - i + 1; j++)
        {
            cout << "*";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << " ";
        }
        for (int l = 1; l <= 9 - i + 1; l++)
        {
            cout << " *";
        }
        cout << endl;
    }
    cout << endl;

    for (int i = 1; i <= 5; i++)
    {

        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 5 - i + 1; k++)
        {
            cout << "* ";
        }

        cout << endl;
    }

    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 5 - i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i + 1; k++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 4 - i + 1; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    // for (int i = 4; i >= 1; i--)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }
    for (int i = 2; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    int count1 = 0;
    for (int i = 1; i <= 4; i++)
    {
        count1 = i;
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 4 - i + 1; k++)
        {
            cout << count1++ << " ";
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        for (int k = 1; k <= 2 * (5 - i); k++)
        {
            cout << " ";
        }
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
    for (int i = 5; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        for (int k = 1; k <= 2 * (5 - i); k++)
        {
            cout << " ";
        }
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
    cout << endl;
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 3; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 4; i >= 1; i--)
    {
        for (int j = 1; j <= 4 - i + 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= i; k++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    for (int i = 1; i <= 4; i++)
    {
        count = i;
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 4 - i + 1; k++)
        {
            cout << count++ << " ";
        }
        cout << endl;
    }
    for (int i = 3; i >= 1; i--)
    {
        count = i;
        for (int j = 1; j <= i - 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 4 - i + 1; k++)
        {
            cout << count++ << " ";
        }
        cout << endl;
    }
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (k == 1 || i == 5 || k == (2 * i - 1))
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
    for (int i = 5; i >= 1; i--)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (k == 1 || i == 5 || k == 2 * i - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    cout << endl;
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (k == 1 || k == 2 * i - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
    for (int i = 4; i >= 1; i--)
    {
        for (int j = 1; j <= 4 - i + 1; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (k == 1 || k == 2 * i - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
    cout << endl;

    for (int i = 5; i >= 1; i--)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (k == 1 || i == 5 || k == 2 * i - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
    for (int i = 2; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            if (i == 5 || k == 1 || k == 2 * i - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    return 0;
}