import requests as req

# r = requests.get("https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation eq 'CS'&$orderby=Number asc")
# print(r.json())
# print(r.status_code)

url = "https://api.purdue.io/odata/"
count = 0

print("Welcome to Purdue API Test!\n")
entity = input("Select entity: ")

if entity == "Courses":
    property1 = input("Enter property: ")
    url += f"{entity}?$filter="

    # if property1 == 'Title':
    if 'Title' in property1:
        title = input("Enter title: ")

        count += 1
        if count == 1:
            url += f"contains(Title, '{title}')"
        else:
            url += " and "
            url += f"contains(Title, '{title}')"
        # print(url)
        # r = req.get(url)
        # print(r.content)

    # if property1 == 'CreditHours':
    if 'CreditHours' in property1:
        credits1 = input("Enter credits: ")

        count += 1
        if count == 1:
            url += f"CreditHours eq {credits1}"
        else:
            url += " and "
            url += f"CreditHours eq {credits1}"
        # print(url)
        # r = req.get(url)
        # print(r.content)

    if 'Number' in property1:
        courseNum = input("Enter course number: ")

        count += 1
        if count == 1:
            url += f"Number eq '{courseNum}'"
        else:
            url += " and "
            url += f"Number eq '{courseNum}'"

    print(url)
    r = req.get(url)
    print(r.content)


elif entity == 'x':
    url += "Courses?$filter=contains(Title, 'Calculus') and CreditHours eq 4.0 and CourseId eq 'f660d4a5-1a6a-4540-b636-099e8561a8bb'"
    print(url)
    r = req.get(url)
    print(r.content)


