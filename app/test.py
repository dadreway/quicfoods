import csv

with open('Menu Items.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    
    csv_reader.next()
    
    for line in csv_reader:
        if line[2] == 'golden_gate_restaurant':
            print line