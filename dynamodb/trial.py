# this is the way to execute the operations but it is currently not working as there is no access key id or secret access key id  we will figure some way out 
# DML Commands
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1') #creates a dynamodb resource high level connection object to Amazon DynamoDB here resource() is used as its high level and object oriented whereas client() is low -level and raw API
table = dynamodb.Table('Influencers') #python object that represents the table
print ("Connected Succesfully")
print(table.table_status) #actual API call which fetches metdata of the table. It calls DescribeTable API on DynamoDB. Table status types: ACTIVE,CREATING,UPDATING,DELETING

# inserting items eg adding a new influencer
response = table.put_item(
    Item={
        'PK': 'INF#102', #identifies the influencer
        'SK': 'PROFILE', #identifies the type of data
        'name': 'Aman',
        'platform': 'Instagram',
        'followers': 120000
    }
)

print("Inserted:", response)

# updating item eg increasimg the follower count of influencer
response = table.update_item(
    Key={
        'PK': 'INF#102',
        'SK': 'PROFILE'
    },
    UpdateExpression="SET followers = followers + :inc",  #followers +:inc is atomic update 
    #UpdateExpression tells what to change
    ExpressionAttributeValues={
        ':inc': 5000  #:inc is the placeholder value
    },
    ReturnValues="UPDATED_NEW"
)

print(response)

# deleting an item eg removing one influencer from the system

response = table.delete_item(
    Key={
        'PK': 'INF#102',
        'SK': 'PROFILE'
    }
)

print("Deleted")

# -----------------------------------------------------------
# DQL Commands (READ operations)

# select single item we use get_item() eg get one influencer
response = table.get_item(
    Key={
        'PK': 'INF#101',
        'SK': 'PROFILE'
    }
)

item = response.get('Item')
print(item)

# to select with a condition we use query() eg get all data of one influencer
from boto3.dynamodb.conditions import Key

response = table.query(
    KeyConditionExpression=Key('PK').eq('INF#101')
)

items = response['Items']

for item in items:
    print(item) #returns multiple rows with same PK
    
# to select all we use scan() but it is a costly operation and we avoid this in production
response = table.scan()

items = response['Items']

for item in items:
    print(item)