import sys, json
import subprocess
import pyautogui





#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
	
    if lines == '1' or lines == "1" or lines == 1:
        pyautogui.moveTo(100, 150)

        
    print(lines)
	
    #return the sum to the output stream
    

#start process
if __name__ == '__main__':
    main()





