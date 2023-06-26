from fastapi import FastAPI
app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

my_file = open("possible.txt", "r")
data = my_file.read()
OriginalData = data.split("\n")
my_file.close()

CurrentData = OriginalData
LastData = CurrentData

def greyColor(data : dict, CurrentData):
   finalData = []
   for word in CurrentData:
      flag = False
      for i in range(len(word)):
         if word[i] == data['character']:
            flag = True
      if not flag:
         finalData.append(word)
   return finalData

def greenColor(data : dict, CurrentData):
   finalData = []
   for word in CurrentData:
      if word[int(data["position"]) - 1] == data['character']:
         finalData.append(word)
   return finalData

def yellowColor(data : dict, CurrentData):
   finalData = []
   for word in CurrentData:
      flag = False
      for i in range(len(word)):
         if word[i] == data['character'] and i != int(data["position"]) - 1:
            flag = True
      if flag:
         finalData.append(word)
   return finalData

@app.get("/")
async def index():
   return CurrentData

@app.post("/")
async def eleminate(data: dict):
   global CurrentData
   global LastData
   LastData = CurrentData
   match(data['color']):
      case 'grey':
         CurrentData = greyColor(data, CurrentData)
      case 'green':
         CurrentData = greenColor(data, CurrentData)
      case 'yellow':
         CurrentData = yellowColor(data, CurrentData)
   print(data)
   return CurrentData

@app.get("/reset")
async def reset():
   global OriginalData
   global CurrentData
   CurrentData = OriginalData
   return CurrentData

@app.get("/undo")
async def reset():
   global LastData
   global CurrentData
   CurrentData = LastData
   return CurrentData
