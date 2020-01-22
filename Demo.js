function fun( id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.changeSalary=changeSalary;
    function fun(otherSalary)
    {
      this.salary=otherSalary
    }
}
e=new fun(23,'shilpa',12000)
console.log(e);