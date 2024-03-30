#include <iostream>
using namespace std;
class A
{
public:
   virtual void show()
    {
        cout << "Hello";
    }
};
class B : public A
{
public:
    void show()
    {
        cout << "Byy";
    }
};
int main()
{
    A *ptr;
    B obj;
    ptr = &obj;
    ptr->show();
    // obj.show();
    return 0;
}