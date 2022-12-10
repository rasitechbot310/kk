::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJH2F4EMyKQhRDC+2DCuRLYk4+vHy7OWJsQA8UfErcIrP07ePbbJezkTwdJQsxX8Xi84NHhhQMBuoYW8=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
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
::cxY6rQJ7JhzQF1fEqQJhZksaHGQ=
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbAs=
::ZQ05rAF9IAHYFVzEqQITKQldDCCDKGr6MLQX++H1jw==
::eg0/rx1wNQPfEVWB+kM9LVsJDCeDLmLa
::fBEirQZwNQPfEVWB+kM9LVsJDCeDLmLa
::cRolqwZ3JBvQF1fEqQITOh5VWAGGfEmjRocd++G72++Eqi0=
::dhA7uBVwLU+EWGuF50twHB5XRGQ=
::YQ03rBFzNR3SWATExkMjIVtgSQeKXA==
::dhAmsQZ3MwfNWATExkMjIVtgSQeKXA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRmn5kcxPB5QDCabfFm7Fbxc3O3454o=
::Zh4grVQjdCuDJE2Ly1AxOxIGcAeDLmL0A60ZiA==
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title Vaccine Database Search - Created By Rasi Tech
echo.
echo Input IPv4
echo.
set /p ip=[IPv4]: 
:svs
echo.
echo.
echo Save Result?
echo.
set /p save=[Y/N]: 
if %save%== Y goto home1
if %save%== N goto home
if %save%== y goto home1
if %save%== n goto home
goto svs
:home
cls
echo.
echo.
echo Input Nama
echo.
set /p nama=[NAMA]: 
setlocal enabledelayedexpansion
set string1=%nama%
set string2=!string1: =%%20!
echo.
echo.
echo Query URL	: %string2%
echo Query	: %nama%
echo.
echo.
curl %ip%:3000/?nama=%string2% | jq
echo.
echo.
echo Tekan Enter Untuk Cek Ulang.
pause >null
goto svs
:home1
cls
echo.
echo.
echo Input Nama
echo.
set /p nama=[NAMA]: 
setlocal enabledelayedexpansion
set string1=%nama%
set string2=!string1: =%%20!
echo.
echo.
echo Query URL	: %string2%
echo Query	: %nama%
echo.
echo.
set datetimef=%date:~-4%-%date:~3,2%-%date:~0,2%
curl -l %ip%:3000/?nama=%string2% | jq > ".\result\%nama%-%datetimef%.txt"
curl %ip%:3000/?nama=%string2% | jq
echo.
echo.
echo Tekan Enter Untuk Cek Ulang.
pause >null
goto svs