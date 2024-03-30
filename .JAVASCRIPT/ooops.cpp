#include <iostream>
using namespace std;
class Base
{
public:
    int age;
    string name;

    Base(int age, string name)
    {
        cout << "Paremeterised constructor Called" << endl;

        this->age = age;
        this->name = name;
    }
    Base(Base &obj)
    {
        cout << "Copy Constructor : " << endl;
        this->age = obj.age;
        this->name = obj.name; // Create a deep copy
        cout << obj.name << " " << obj.age << endl;
    } // copy constructor
    void print()
    {
        cout << "Age is : " << age << " "
             << " Name is : " << name << endl;
    }
    void setName(string name)
    {
        this->name = name;
    }
    ~Base()
    {
        cout << "Destructor Called" << endl;
    }
};
int main()
{
    // Base obj(1, "Ashish");
    // Base *ob = new Base(2, "Rangra");
    // Base obj3 = obj;
    // obj.setName("Sharma");
    // obj.print();
    // obj3.print();
    // Base obj2(*ob); // Copy Constructor
    // Base obj2 = *ob;
    // // obj.print();
    // // ob->print();

    // // (*ob).print();
    // // obj2.print();
    // (*ob).setName("ANkit");
    // ob->print();
    // obj2.print();
    Base o(1, "s"); // destructor called automatically for static objects
    Base *obj = new Base(12, "Sye");
    obj->print();
    // Base *obj2 = obj; shLLOW COPY
    Base *obj2 = new Base(*obj);
    // obj2->print();
    obj->setName("Dummy");
    obj->print();
    obj2->print();
    delete obj;
    delete obj2;
    // obj2->print();
    

    return 0;
}