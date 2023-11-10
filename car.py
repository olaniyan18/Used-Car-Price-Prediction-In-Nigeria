import pickle
import numpy as np
from flask import Flask, request, render_template

app = Flask(__name__, template_folder='template', static_folder='static')

model = pickle.load(open('car.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('car.html', data = None)








@app.route('/car_price', methods = ['GET','POST'])
def estimate_price():
    brand = 0
    odo = 0
    car = 0
    location = 0
    imported = 0
    engine = 0
    transmission = 0
    fuel_type = 0
    color = 0
    year = 1980
    
    
    if request.method == 'POST':

        brand = request.form.get('brand')
        car = request.form.get('car')
        location = request.form.get('location')
        imported = request.form.get('import')
        engine = request.form.get('engine')
        transmission = request.form.get('transmission')
        fuel_type = request.form.get('fuel_type')
        color = request.form.get('color')
        year = request.form.get('year')
        odo = int(request.form['a'])
        
        
            
        print(f"brand: {brand}, car_type: {car}, meter: {odo}, location: {location}, import type: {imported}, engine: {engine},transmission: {transmission}, fuel_type:{fuel_type}, color:{color}, year:{year}")
        
    
 
    
        features = np.array([[brand,car,odo,location,imported,engine,transmission,fuel_type,color,year]], dtype= int)        
        prediction = model.predict(features)
        # prediction_round = np.round(prediction, -6)
        # formatted_number = f'{prediction_round:,}'
        
        formatted_number = [f'{int(round(val, -5)):,}' for val in prediction]

        
        print(f"Data to be sent: {formatted_number[0]}")
        return render_template('car.html',data = formatted_number[0])
    
    return render_template('car.html', data = None)




if __name__ == '__main__':
    app.run(debug = True)
    
    

