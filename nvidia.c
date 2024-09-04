#include<stdio.h>
int set_function(int k){
    if(k==1){
        return 0;
    }
    if(k%2){
        return (set_function(k-1));
    }
    else {
        return (set_function(k/2)+1);
    }
}
int main () {
    int i=15;
    printf("%d\n",set_function(i));
    return 0;

}