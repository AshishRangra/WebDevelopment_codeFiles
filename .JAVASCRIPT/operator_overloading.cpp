#include <iostream>
using namespace std;
class A
{
public:
    int a;
    A(int a)
    {
        this->a = a;
    }
    void operator-(A &obj)
    {
        int var = a + obj.a;
        cout << "Sum of values is : " << var << endl;
    }
};
int main()
{
    A obj(5);
    A obj1(2);
    obj - obj1;
    return 0;
}