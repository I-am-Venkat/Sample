from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Set up the driver (make sure you have the correct driver installed, e.g., chromedriver)
driver = webdriver.Chrome()  # or webdriver.Edge(), webdriver.Firefox(), etc.

# Open the login page (update the path if needed)
driver.get("file:///C:/Users/ADMIN/Desktop/selab/login.html")

# --- Test 1: Submit empty form ---
driver.find_element(By.ID, "loginForm").submit()
time.sleep(3)
assert driver.find_element(By.ID, "usernameError").is_displayed()
assert driver.find_element(By.ID, "passwordError").is_displayed()

# --- Test 2: Invalid username (too short) ---
username = driver.find_element(By.ID, "username")
password = driver.find_element(By.ID, "password")
username.clear()
password.clear()
username.send_keys("ab")
password.send_keys("123456")
driver.find_element(By.ID, "loginForm").submit()
time.sleep(3)
assert driver.find_element(By.ID, "usernameError").is_displayed()
assert not driver.find_element(By.ID, "passwordError").is_displayed()

# --- Test 3: Invalid password (too short) ---
username.clear()
password.clear()
username.send_keys("validuser")
password.send_keys("123")
driver.find_element(By.ID, "loginForm").submit()
time.sleep(3)
assert not driver.find_element(By.ID, "usernameError").is_displayed()
assert driver.find_element(By.ID, "passwordError").is_displayed()

# --- Test 4: Valid credentials ---
username.clear()
password.clear()
username.send_keys("admin")
password.send_keys("admin@123")
driver.find_element(By.ID, "loginForm").submit()
time.sleep(3)
# Both error messages should be hidden
assert not driver.find_element(By.ID, "usernameError").is_displayed()
assert not driver.find_element(By.ID, "passwordError").is_displayed()

print("All tests passed.")
driver.quit()