#Acceptance test for super scouts version 0.1.1 Alpha
#inclusion of sleep function for visual purposes, unnecessary
#for actual function
import sys
import time

# This line is likely unncessary on your machine,
# I have a weird issue with python location's and importing selenium.
# This line fixes that issue and allows me to import selenium and webdriver for testing
sys.path.insert(0, r"C:\Users\benhu\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\LocalCache\local-packages\Python311\site-packages")

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


PATH = r"C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

#link to the URL
driver.get("http://superscouts.site/")

groupEntry = driver.find_element_by_id("groupName")

time.sleep(5)

groupEntry.send_keys("testGroup")
groupEntry.send_keys(Keys.RETURN)

#attempt to run tests for each running website element

try:
    #calendar test
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Calendar"))
    )
    time.sleep(3)
    page.click()
    time.sleep(1)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "backButton"))
    )
    time.sleep(1)
    #back to homepage with back button
    page.click()
    time.sleep(3)
    #progression tracker test
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Progress"))
    )
    page.click()
    #enter milestone data
    progress = driver.find_element_by_id("mCreateTitle")
    time.sleep(1)
    progress.send_keys("testName")
    progress = driver.find_element_by_id("mCreateDesc")
    time.sleep(1)
    progress.send_keys("test")
    progress = driver.find_element_by_id("mAssignMember")
    time.sleep(1)
    progress.send_keys("tester")
    time.sleep(3)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.ID, "ButtonCreateMilestone_Submit"))
    )
    page.click()
    time.sleep(3)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.ID, "ButtonRemoveMilestone_Submit"))
    )
    page.click()
    time.sleep(1)

    #back to home page
    driver.back()

    #game test
    time.sleep(3)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Game Hub"))
    )
    page.click()
    time.sleep(3)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "lightsOutHover"))
    )
    page.click()
    time.sleep(1)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.ID, "B1"))
    )
    page.click()
    time.sleep(1)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.ID, "E4"))
    )
    page.click()
    time.sleep(1)
    page = WebDriverWait( driver, 10).until(
        EC.presence_of_element_located((By.ID, "newGame"))
    )
    page.click()
    time.sleep(1)
    #return to game hub
    driver.back()
    time.sleep(1)
    #return back home
    driver.back()

finally:
    #keep for testing purposes
    time.sleep(5)

#close browser window after testing.
    driver.quit()

