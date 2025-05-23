
def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def validate_day_of_week(day):
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return day in days_of_week

def calculate_day(start_day, start_date, target_date, days_in_month):
    # Calculate the total number of days between the dates
    total_days = 0
    for month in range(start_date[1], target_date[1]):
        total_days += days_in_month[month - 1]
    total_days += target_date[0] - start_date[0]
    
    # Calculate the day of the week
    day_of_week = (start_day + total_days) % 7
    return day_of_week

def main():
    # Days of the week
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    # Days in each month for a non-leap year
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    # Get user input for start date and target date
    while True:
        try:
            start_date = list(map(int, input("Enter start date (day month year): ").split()))
            target_date = list(map(int, input("Enter target date (day month year): ").split()))
            break
        except ValueError:
            print("Invalid input. Please enter a valid date.")
    
    # Validate start date and target date
    if start_date[1] < 1 or start_date[1] > 12:
        print("Invalid start date. Month must be between 1 and 12.")
        return
    if target_date[1] < 1 or target_date[1] > 12:
        print("Invalid target date. Month must be between 1 and 12.")
        return
    
    # Adjust days in February for leap year
    if is_leap_year(start_date[2]):
        days_in_month[1] = 29
    if is_leap_year(target_date[2]):
        days_in_month[1] = 29
    
    # Map day of the week to a number (0-6)
    while True:
        start_day = input("Enter start day of the week: ")
        if validate_day_of_week(start_day):
            start_day = days_of_week.index(start_day)
            break
        else:
            print("Invalid day of the week. Please enter a valid day.")
    
    # Calculate the day of the week for the target date
    day_of_week = calculate_day(start_day, start_date, target_date, days_in_month)
    print(f"The day of the week for the target date is: {days_of_week[day_of_week]}")
