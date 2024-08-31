from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import os

# Load environment variables from .env file located one directory up
load_dotenv('../../.env')  # Adjust the path as needed

# Retrieve credentials from environment variables
username_str = os.getenv('HTB_ACADEMY_USERNAME')
password_str = os.getenv('HTB_ACADEMY_PASSWORD')

# Set up Selenium WebDriver (e.g., Chrome)
driver = webdriver.Chrome()

# Navigate to the login page
driver.get("https://www.hackthebox.com/login")

# Log in
username = driver.find_element_by_name("username")
password = driver.find_element_by_name("password")

# Use credentials from environment variables
username.send_keys(username_str)
password.send_keys(password_str)
password.send_keys(Keys.RETURN)

# Wait for login to complete or navigate to the next page
# You might want to add explicit waits here to ensure the login completes before continuing

# Navigate to the page with the content you want to scrape
driver.get("https://www.hackthebox.com/academy/somepage")

# Extract page content
soup = BeautifulSoup(driver.page_source, 'html.parser')
content = soup.get_text()

# Close the browser
driver.quit()

# Print or save the content for further processing
print(content)
