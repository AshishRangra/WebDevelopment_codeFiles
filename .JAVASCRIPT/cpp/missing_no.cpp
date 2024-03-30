#include <iostream>
#include <algorithm>
#include <map>
using namespace std;
int main()
{
    int arr[] = {1, 2, 4, 5, 0};
    map<int, bool> mp;
    for (int i = 0; i < 5; i++)
    {
        mp[arr[i]] = true;
    }
    for (int i = 0; i < mp.size(); i++)
    {
        if (mp.find(i) == mp.end())
        {
            cout << i;
            return i;
        }
    }
    return 0;
}