
import requests as req

class Search:
    url = "https://api.purdue.io/odata/Subjects"
    r = req.get(url)
    api_data = r.json()

    @classmethod
    def create_id_abbreviation_dict(cls):
        id_abbreviation_dict = {}
        for subject in cls.api_data['value']:
            id_abbreviation_dict[subject['Id']] = subject['Abbreviation']
        return id_abbreviation_dict

# Create a dictionary with Id as the key and Abbreviation as the value
id_abbreviation_dict = Search.create_id_abbreviation_dict()