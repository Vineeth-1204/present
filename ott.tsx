import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  className: string;
  section: string;
};

const AttendanceScreen: React.FC<Props> = ({ className, section }) => {
  const [otp, setOtp] = useState<string | null>(null);
  const [attendanceStatus, setAttendanceStatus] = useState<string | null>(null);

  // Placeholder for future backend OTP fetch
  const fetchOtpFromBackend = async () => {
    // Future: Replace with actual backend API call
  };

  // Placeholder for future backend attendance check
  const fetchAttendanceFromBackend = async () => {
    // Future: Replace with actual backend API call
  };

  const handleGenerateOTP = () => {
    fetchOtpFromBackend();
    // Optionally, show a placeholder or loading state here
  };

  const handleCheckAttendance = () => {
    fetchAttendanceFromBackend();
    // Optionally, show a placeholder or loading state here
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>
          Class: {className} | Section: {section}
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGenerateOTP}>
          <Text style={styles.buttonText}>Generate OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCheckAttendance}>
          <Text style={styles.buttonText}>Check Attendance</Text>
        </TouchableOpacity>
      </View>

      {otp && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Current OTP: {otp}</Text>
        </View>
      )}

      {attendanceStatus && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Attendance Status: {attendanceStatus}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F1',
  },
  navbar: {
    height: 60,
    backgroundColor: '#FFB88C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#FFB88C',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  navbarText: {
    color: '#482E21',
    fontSize: 19,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF9666',
    marginVertical: 12,
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 12,
    shadowColor: '#FFD8C0',
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    color: '#482E21',
    fontWeight: '600',
  },
});

export default AttendanceScreen;
