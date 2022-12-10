::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJH2F4EMyKQhRDC+2DCuRLYk4+vHy7OWJsQA8UfErcIrP07ePbbJezkTwdJQsxX8Xi84NHhhQMBuoYW8=
::YAwzuBVtJxjWCl3EqQJhSA==
::ZR4luwNxJguZRRmW9VE5eUkHLA==
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSTk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIGKRhXRQqHfE+7ErQe6fv+r9mCo18eXII=
::eg0/rx1wNQPfEVWB+kM9LVsJDBeWPXmuZg==
::fBEirQZwNQPfEVWB+kM9LVsJDBeWPXmuZg==
::cRolqwZ3JBvQF1fEqQIGKRhXRQqHfE+7ErQe6fv+r9mCo18eXII=
::dhA7uBVwLU+EWGuF50twHB5XRGQ=
::YQ03rBFzNR3SWATExkMjIVtgSQeKXA==
::dhAmsQZ3MwfNWATExkMjIVtgSQeKXA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCuDJE2Ly1AxOxIGcCCDKGq4B6YZqN767OmOrEhdZ+c+aozTlLGWJYA=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title Vaccine Database Search - Rasi Tech
:home
cls
echo.
echo Created By Rasi Tech
echo.
echo Requirement :
echo 1. Install Node Js
echo 2. Install DBMS MongoDB 4
echo 3. Install Chrome Browser
echo 4. Powerful specs for loading data
echo.
echo. Press Enter To Start
echo.
echo.
pause >null
echo.
echo Already Setup? (Y/N)
echo.
echo.
set /p jawab=[Y/N]: 
if %jawab%== Y goto mulai
if %jawab%== N goto setup
if %jawab%== y goto mulai
if %jawab%== n goto setup
:mulai
npm run dev
start cari.exe
goto home
:setup
echo.
echo Tunggu Sampai 600K Data Terload!
echo.
npm install open
node saveBigJSON.js
goto home
pause