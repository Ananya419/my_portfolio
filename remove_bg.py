import os
from rembg import remove

def process_directory(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg"):
            input_path = os.path.join(directory, filename)
            
            with open(input_path, 'rb') as i:
                input_data = i.read()
                
            print(f"Removing background from {filename}...")
            output_data = remove(input_data)
            
            with open(input_path, 'wb') as o:
                o.write(output_data)
            print(f"Saved transparent image to {input_path}")

if __name__ == '__main__':
    process_directory(r"public\assets\mascot")
