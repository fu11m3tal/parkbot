# ParkBot

> ParkBot, a command line tool that intakes a JSON file of parking spot data, and outputs a list of parking spots that match the query.

## Table of Contents

1. [Requirements](#Requirements)
1. [Installation](#Installation)
1. [Execution](#Execution)
1. [Commands](#Commands)


## Requirements

- Node >= 6.13.0

## Installation

Assuming you’ve already installed Node.js, if not installed a step by step can be located at [npm](https://nodejs.org/en/download/package-manager/)

From within the root directory:

Check Node Version
```sh
node -v
```

Make parkbot commands executable
```sh
chmod +x parkbot 
```

## Execution
From within the root directory:

Parkbot is executable accepting three arguments with a single space seperating each value (`JSON`, `command`, `argument`).

Format Template:
```
./parkbot [JSON] [command] [argument]
```
JSON File Name: 
```sh
airgarage-data.json
```

## Commands

List of commands that take in an argument and query the JSON file  returning matches via console.

- ***locate:*** Returns a list of spot names by location (state only).
     
- ***find_price_hourly_lte:*** Returns a list of spot names where the hourly price is less than or equal to the query price (cents).

- ***find_price_hourly_gt:*** Returns a list of spot names where the price is greater than the query price (cents). 

| Command                   | Argument  | Type      | Example                                                |
| ------------------------- |:--------- | :-------- | :----------------------------------------------------- |
| `locate`                   |  ***state***    | String  | ./parkbot airgarage-data.json `locate` AZ                |
| `find_price_hourly_lte`     |  ***cents***    | Number  | ./parkbot airgarage-data.json `find_price_hourly_lte` ***100*** |
| `find_price_hourly_gt`      |  ***cents***    | Number  | ./parkbot   airgarage-data.json `find_price_hourly_gt` ***200***  |

