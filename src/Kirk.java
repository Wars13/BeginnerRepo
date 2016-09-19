import java.util.*;
import java.lang.*;
import java.io.*;

class Kirk
{
	protected int a=10;
	public int fun(int a,int b)
	{
		return a+b;
	}
	public static void main(String[] args) throws java.lang.Exception{
		Kirk k= new Kirk();
		System.out.println("Varible: "+k.a);
		System.out.println("Method call: "+k.fun(5,6));
	}
}
