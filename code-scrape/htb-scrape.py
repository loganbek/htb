import requests
from bs4 import BeautifulSoup
import re

# Credentials
username = 'your_username'
password = 'your_password'

# URLs
login_url = 'https://www.hackthebox.com/login'  # Adjust the URL based on actual login endpoint
base_url = 'https://academy.hackthebox.com/module/{}/section/{}'

# Limits for modules and sections (adjust as necessary)
max_modules = 100  # Adjust this number based on the actual number of modules
max_sections = 100  # Adjust this number based on the actual number of sections

# Create a session
session = requests.Session()

# Get the login page to retrieve any necessary tokens or cookies
login_page = session.get(login_url)
soup = BeautifulSoup(login_page.content, 'html.parser')

# Find the token or other hidden fields required for login (if any)
# Example: token = soup.find('input', {'name': 'csrf_token'})['value']
# Adjust the following payload based on the actual form fields
payload = {
    'username': username,
    'password': password,
    # 'csrf_token': token,  # Uncomment if a token is needed
}

# Perform login
login_response = session.post(login_url, data=payload)

# Check if login was successful
if login_response.url == login_url or login_response.status_code != 200:
    print("Login failed!")
else:
    print("Login successful!")

    for module in range(1, max_modules + 1):
        for section in range(1, max_sections + 1):
            target_url = base_url.format(module, section)
            
            # Access the target URL after logging in
            target_response = session.get(target_url)

            if target_response.status_code == 200:
                soup = BeautifulSoup(target_response.content, 'html.parser')

                # Find all <pre> elements with a class that starts with 'language-'
                code_snippets = soup.find_all('pre', class_=re.compile(r'\blanguage-\b'))

                # Extract and print the text content of each code snippet
                if code_snippets:
                    print(f"Code snippets from {target_url}:\n")
                    for snippet in code_snippets:
                        code = snippet.get_text()
                        print(code)
                        print("\n" + "="*80 + "\n")  # Separator for readability
            elif target_response.status_code == 404:
                print(f"{target_url} not found (404). Skipping...")
            else:
                print(f"Failed to retrieve the target page {target_url}. Status code: {target_response.status_code}")
